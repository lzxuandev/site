#include "gitool.h"
#include "log.h"
#include "option.h"
#include "command.h"

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Command command = {
    .command_name = NULL,
    .local_path = NULL,
    .remote_path = NULL,
    .username = NULL,
    .repository = NULL,
    .branch = NULL,
    .token = NULL
};

struct Option option = {
    .verbosity = V_DEFAULT,
    .branch = NULL,
    .token= NULL,
    .show_help = false,
};

const struct OptionTable option_table[] = {
    { 'v', "version",   NULL,           "Show version"},
	{ 'V', "verbose",    NULL,           "Enable verbose (debug) output mode" },
	{ 'q', "quiet",      NULL,           "Suppress status message" },
	{ 't', "token",      "<token>",      "Set remote repository Personal Access Token API (default: null)" },
    { 'b', "branch",     "<branch>",     "Set remote repository Branch (default: main)" },
    { 'h', "help",       NULL,           "Show help"}
};

const struct CommandTable command_table[] = {
    {"upload",    2,   2, "<local_path> <username@repo:path>", "Upload local file to remote path"},
    {"delete",    1,   1, "<username@repo:path>",              "Delete file from remote repository"},
    {"list",      1,   1, "<username@repo:path>",              "List files in remote repository"},
    {"download",  1,   1, "<username@repo:path>",              "Download remote file to current directory"},
};

const int option_table_size = sizeof(option_table)/sizeof(option_table[0]);
const int command_table_size = sizeof(command_table)/sizeof(command_table[0]);

void print_option_help() {
    int max_option_longopt_width = 0;
    int max_option_argument_width = 0;
	for (int i = 0; i < option_table_size; i++) {
        if ((int)strlen(option_table[i].longopt) > max_option_longopt_width) max_option_longopt_width = strlen(option_table[i].longopt);

        if (option_table[i].argument) {
            int option_argument_width = strlen(option_table[i].argument);
            if (option_argument_width > max_option_argument_width) max_option_argument_width = option_argument_width;
        }
    }

    max_option_longopt_width += 1;
    max_option_argument_width += 1;
    int total_width = max_option_longopt_width + max_option_argument_width;
	for (int i = 0; i < option_table_size; i++) {
        printf("  -%c, ", option_table[i].shortopt);
        if (!option_table[i].argument) printf("--%-*s", total_width, option_table[i].longopt);
        else {
            char str[256];
            snprintf(str, sizeof(str), "%s=%s", option_table[i].longopt, option_table[i].argument);
            printf("--%-*s", total_width, str);
        }
		printf("%s\n", option_table[i].description);
	}
}

void print_command_help() {
    int max_command_name_width = 0;
    int max_command_argument_width = 0;
    for (int i = 0 ; i < command_table_size; i++) {
        if ((int)strlen(command_table[i].command_name)> max_command_name_width) max_command_name_width = strlen(command_table[i].command_name);
        if ((int)strlen(command_table[i].argument) > max_command_argument_width) max_command_argument_width = strlen(command_table[i].argument);
    }
    max_command_name_width += 1;
    max_command_argument_width +=1;
    for (int i = 0 ; i < command_table_size; i++) {
        printf(" gitool ");
        printf("%-*s%-*s", max_command_name_width, command_table[i].command_name, max_command_argument_width, command_table[i].argument);
        printf("%s\n", command_table[i].description);
    }
}

void print_version() {
    printf("gitool version: %s\n", VERSION);
}

void print_usage() {
	printf("Usage: gitool [options] <command> [--] [<arguments>]\n");
    printf("gitool version: %s\n", VERSION);
}

void print_help() {
	print_usage();
	printf("\n");
	printf("Options:\n");
	print_option_help();
	printf("\n");
	printf("Commands:\n");
    print_command_help();
	printf("\nSee man 1 gitool for more information about gitool commands and options\n\n");
}

int main(int argc, char *argv[]) {

    init_log(V_DEFAULT);

    if (argc == 1) {
        print_usage();
        return EXIT_FAILURE;
    }

    parse_option(&option, option_table, option_table_size, &argc, &argv);

    log_set_level(option.verbosity);

    if (option.show_help) {
        print_help();
    }

    if (option.show_version) {
        print_version();
    }

    if (argc == 1) return EXIT_SUCCESS;

    parse_command(&command, command_table, command_table_size, argc, argv);

    if (strcmp(command.command_name, "upload") == 0) {
        command.local_path = argv[2];
        command.remote_path = argv[3];
    } else {
        command.local_path = NULL;
        command.remote_path = argv[2];
    }

    const char *at_sign = strchr(command.remote_path, '@');
    const char *colon = strchr(command.remote_path, ':');

    if (at_sign == NULL || colon == NULL) {
        fprintf(stderr, "gitool error: Remote path wrong format, e.g. try username@repository:path\n");
        return EXIT_FAILURE;
    }

    if (at_sign > colon) {
        fprintf(stderr, "gitool error: Remote path wrong format, e.g. try username@repository:path\n");
        return EXIT_FAILURE;
    }

    command.username = strndup(command.remote_path, at_sign - command.remote_path);
    command.repository = strndup(at_sign + 1, colon - (at_sign + 1));
    command.remote_path= strdup(colon + 1);

    if (command.local_path) {
        if (command.remote_path == NULL || *command.remote_path == '\0') {
            const char *filename = strrchr(command.local_path, '/');
            if (filename) command.remote_path = strdup(filename + 1);
            else command.remote_path = strdup(command.local_path);
        }
    }

    command.branch = option.branch? option.branch:"main";
    command.token = option.token? option.token:NULL;

    log_verbose("command:      %s\n", command.command_name);
    log_verbose("local path:   %s\n", command.local_path);
    log_verbose("remote path:  %s\n", (*command.remote_path!='\0') ? command.remote_path:"root");
    log_verbose("branch:       %s\n", command.branch);
    log_verbose("token:        %s\n", command.token);

    handle_command(command);

    return EXIT_SUCCESS;
}
