(function () {
  var categories = [
    {
      id: 'anime',
      title: 'Anime',
      items: [
        { title: 'Steins;Gate', image: '' },
        { title: 'JoJo\'s Bizarre Adventure', image: '' },
        { title: 'Death Note', image: '' },
        { title: 'Cyberpunk: Edgerunners', image: ''},
        { title: 'One Punch Man', image: '' },
        { title: 'Solo Leveling', image: '' },
        { title: 'Demon Slayer: Kimetsu no Yaiba', image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/05/14150026/demon-slayer-season-5.jpeg' },
        { title: 'Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle', image: ''},
        { title: 'Demon Slayer: Kimetsu no Yaiba – The Movie: Mugen Train', image: ''},
        { title: 'Classroom of the Elite', image: ''},
        { title: 'Your Name.', image: ''},
        { title: 'Tokyo Ghoul', image: ''},
        { title: 'Assassination Classroom', image: ''},
        { title: 'Suzume', image: ''},
        { title: 'Weathering with You', image: ''},
        { title: 'The Tunnel to Summer, the Exit of Goodbyes', image: ''},
        { title: 'A Whisker Away', image: ''},
        { title: 'Crayon Shin-chan', image: ''},
        { title: 'Detective Conan', image: ''},
        { title: 'Magic Kaito', image: ''},
        { title: 'Shin Chan in Rakuga Kingdom', image: ''},
        { title: 'B-Daman Crossfire', image: 'https://m.media-amazon.com/images/M/MV5BOWE5NTFjYmUtOWE3Yy00MjdkLWIyMTUtZjBkODY0MzcyY2Q3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'Yu-Gi-Oh!', image: ''},
        { title: 'Crayon Shinchan: The Storm Called!: Me and the Space Princess', image: 'https://upload.wikimedia.org/wikipedia/en/b/be/Poster_for_the_20th_Movie_of_Crayon_Shin-chan_released_in_2012.jpg'},
        { title: 'Crayon Shin-chan: Fast Asleep! The Great Assault on Dreamy World!', image: ''},
        { title: 'Crayon Shin-chan: Burst Serving! Kung Fu Boys ~Ramen Rebellion~', image: ''},
      ],
    },
    {
      id: 'cartoon',
      title: 'Cartoon',
      items: [
        { title: 'WALL-E', image: ''},
        { title: 'Gravity Falls', image: 'https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg' },
        { title: 'Adventure Time', image: '' },
        { title: 'Regular Show', image: 'https://m.media-amazon.com/images/I/81h1bCDosFL._AC_UF1000,1000_QL80_.jpg'},
        { title: 'The Amazing World of Gumball', image: 'https://m.media-amazon.com/images/M/MV5BNmEwYzNhODgtZDc2Yi00MDAyLTliNWYtMDRkMThmMWE0NGNkXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg'},
        { title: 'Courage the Cowardly Dog', image: 'https://m.media-amazon.com/images/M/MV5BMzdiMWI4OGMtZDc2MC00NDllLTgyMWUtN2ZmZjVlYWFkYjQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'Scooby-Doo! Mystery Incorporated', image: ''},
        { title: 'Teen Titans', image: ''},
        { title: 'Ben 10', image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/ben10.png'},
        { title: 'Chowder', image: 'https://m.media-amazon.com/images/M/MV5BYTkxM2YzYTYtODY1OS00NjFjLWFiNTgtNDI0MjY4N2FkNjY5XkEyXkFqcGc@._V1_QL75_UY281_CR13,0,190,281_.jpg'},
        { title: 'The Tom and Jerry Show', image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_3671_60.jpeg'},
        { title: 'The Grim Adventures of Billy & Mandy', image: 'https://m.media-amazon.com/images/M/MV5BN2FjZmVkNDEtNzQ5My00MDkyLTg0Y2ItYjhkOWJhNGVhYjJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'SpongeBob SquarePants', image: 'https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'The Adventures of Jimmy Neutron: Boy Genius', image: 'https://m.media-amazon.com/images/M/MV5BN2E4MWQwYjEtNzJjZC00OTkxLTkyZGMtYTQxYmUyOWZiMTgyXkEyXkFqcGc@._V1_.jpg'},
        { title: 'The Penguins of Madagascar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYcF7oSaKdbjWtk5WBeZzNTvl8NVvWPI7ecC4Z4Gb-YBEzkFBz8519psFisp9WWeqPJ7xjjtxTNPjg-rMBybsF5gEnJ28yu5Gpc8iraHQew&s=10'},
        { title: 'The Fairly OddParents', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/FOPSeason1.jpg/250px-FOPSeason1.jpg'},
        { title: 'Danny Phantom', image: 'https://m.media-amazon.com/images/M/MV5BNjJlNzc4ODktOGVjYS00MTJkLTgzZTYtZGViMDNlNmM2MGE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'Phineas and Ferb', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnP3GTT6T8hP_fu0V5gQ86aL8Z1l_2ihRChn0_4W_gN2-ku8u5G0AzMOISBHExqAdFYNc6AsP6Z2hhYBfFXVNAOlIXn5yFnW1qq12rcjmzg&s=10'},
        { title: 'The Marvelous Misadventures of Flapjack', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvgHYOkkp0AefcYWO4UDJ05xFAq_Pi8IEu8tT-iTJH-76snw_C1TqBwhlYtuHNHOx4UPMhrw1VKsq2Cc7vwvz-tSIlpBEkKBFHfUQ_239OQ&s=10'},
        { title: 'Finding Nemo', image: '' },
        { title: 'The Incredibles', image: '' },
        { title: 'Ratatouille', image: 'https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg?region=0%2C0%2C540%2C810' },
        { title: 'Up', image: 'https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Monsters, Inc.', image: '' },
        { title: 'Kung Fu Panda', image: 'https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_.jpg' },
        { title: 'Kung Fu Panda 2', image: '' },
        { title: 'Kung Fu Panda 3', image: '' },
        { title: 'Kung Fu Panda 4', image: '' },
        { title: 'How to Train Your Dragon', image: 'https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg' },
        { title: 'Shrek', image: '' },
        { title: 'Bee Movie', image: '' },
        { title: 'Despicable Me', image: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Despicable_Me_%282010_animated_feature_film%29.jpg' },
        { title: 'Megamind', image: '' },
        { title: 'The Smurfs', image: 'https://upload.wikimedia.org/wikipedia/en/1/11/TheSmurfs2011Poster.jpg' },
        { title: 'Cars', image: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Cars_%28video_game%29.jpg'},
        { title: 'Cars 2', image: ''},
        { title: 'Cars 3', image: ''},
        { title: 'Toy Story', image: ''},
        { title: 'Toy Story 2', image: ''},
        { title: 'Toy Story 3', image: ''},
        { title: 'Toy Story 4', image: ''},
        { title: 'Brave', image: 'https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_.jpg'},
        { title: 'Zootopia', image: ''},
        { title: 'Zootopia 2', image: ''},
        { title: 'Moana', image: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg'},
        { title: 'Big Hero', image: ''},
        { title: 'Frozen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUu9Xi4IGF_HOkLgocRxIih2sSCfeirDprrtwa5--vQBKvGwdT6kh7YeACzelrS135fRQ7aQkJLdxN4NnvUe1muhDSbw8riS5mgO3Wd0KsRw&s=10'},
        { title: 'Tangled', image: ''},
        { title: 'Ralph Breaks The Internet', image: ''},
        { title: 'Wreck-It Ralph', image: ''},
        { title: 'Lilo & Stitch', image: ''},
        { title: 'Piglet\'s Big Movie', image: ''},
        { title: 'The Boss Baby', image: ''},
        { title: 'The Boss Baby 2', image: ''},
        { title: 'Ice Age', image: 'https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
        { title: 'Inside out', image: ''},
      ],
    },
    {
      id: 'movie',
      title: 'Movie',
      items: [
        { title: 'Maleficent', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xsX8GckJEa28w_TsjdC6lgo-wyvsNTW4lW80qf_lJYNzGZGNgsmTbQh_jf_N9LL7G4vP&s=10'},
        { title: 'Kingsman: The Secret Service', image: ''},
        { title: 'The Greatest Showman', image: ''},
        { title: 'Interstellar', image: '' },
        { title: 'Titanic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA&s=10' },
        { title: 'Inception', image: '' },
        { title: 'Huat Ah! Huat Ah! Huat', image: 'https://m.media-amazon.com/images/M/MV5BNDg5NmQzZmUtODk0Yi00MGI1LWE1YzMtNmM1OWU2ZjhiNDFlXkEyXkFqcGc@._V1_.jpg'},
        { title: '天天好天', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpxpgHwPZnSF0r6sO_7BaNAbB-gp9shi_lA&s'},
        { title: '东主有喜', image: 'https://www.sktmedia.com/media/tz_portfolio/article/cache/movie-a-2_XL.png'},
        { title: 'The Kid from the Big Apple ', image: ''},
        { title: 'Home Alone', image: ''},
        { title: 'The Matrix', image: '' },
        { title: 'Kung Fu Dunk', image: '' },
        { title: 'friday the 13th', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQU0ctsObVw-5A4qFMOvTQ8UVZBOgLJwtu9k_doMSGWau7EaH6G'},
        { title: 'The Matrix Reloaded', image: '' },
        { title: 'The Matrix Revolutions', image: '' },
        { title: 'The Dark Knight', image: '' },
        { title: 'The Lord of the Rings', image: 'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg' },
        { title: 'The Terminator', image: '' },
        { title: 'Our Times (我的少女时代)', image: ''},
        { title: 'Terminator 2: Judgment Day', image: '' },
        { title: 'Dune: Part One', image: '' },
        { title: 'Dune: Part Two', image: '' },
        { title: 'Forrest Gump', image: '' },
        { title: 'The Green Mile', image: '' },
        { title: 'The Legend of 1900', image: 'https://m.media-amazon.com/images/M/MV5BNDg0ZTU4YTItZTI3My00ODNjLTllMTYtMzI3ZWNjYjU1NGM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'The Pianist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRRtjFth2pn96mCdSTPv-BAqwtBM0tyXWX7KJGR1WZqqYMWwP5smV0wl04ZbHbu-pj0_-aw&s=10' },
        { title: '3 Idiots', image: '' },
        { title: 'Like Stars on Earth', image: '' },
        { title: 'Green Book', image: '' },
        { title: 'The Wolf of Wall Street', image: '' },
        { title: 'The Silence of the Lambs', image: '' },
        { title: 'The Shining', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnERneG2O-gb_LP8ayShZwoKztlCDZnIDau0AWKd0C9JuGprHSNcLI0XOMcnTofgOxvgtI&s=10' },
        { title: 'Joker', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/250px-Joker_%282019_film%29_poster.jpg' },
        { title: 'Sherlock Holmes(2009)', image: '' },
        { title: 'Harry Potter and the Sorcerer\'s Stone', image: 'https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Ip Man', image: 'https://d3tvwjfge35btc.cloudfront.net/Assets/76/483/L_p0006648376.jpg'},
        { title: 'Harry Potter and the Goblet of Fire', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIb7EKKYfM0tX2pE8nrzP-LBo3AiBgLyJN_HuKX7GId7Ca84Ygzf8tTQ-rmcr4SG5Uww08yw&s=10' },
        { title: 'Harry Potter and the Order of the Phoenix', image: 'https://static.wikia.nocookie.net/qghficsimjkaeibhfztnpjrqiezhzuadzsjxwpnxusefbthfes/images/8/88/2A00EFA7-2A42-4745-AB03-0601A69E80D3.jpg/revision/latest/thumbnail/width/360/height/450?cb=20210812224517' },
        { title: 'Harry Potter and the Half-Blood Prince', image: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Harry Potter and the Deathly Hallows – Part 1', image: '' },
        { title: 'Harry Potter and the Deathly Hallows – Part 2', image: '' },
        { title: 'Pirates of the Caribbean: The Curse of the Black Pearl', image: '' },
        { title: 'Pirates of the Caribbean: Dead Man\'s Chest', image: '' },
        { title: 'Pirates of the Caribbean: At World\'s End', image: '' },
        { title: 'Pirates of the Caribbean: On Stranger Tides', image: '' },
        { title: 'Pirates of the Caribbean: Dead Men Tell No Tales', image: '' },
        { title: 'Jurassic World', image: '' },
        { title: 'Jurassic World: Fallen Kingdom', image: '' },
        { title: 'Top Gun: Maverick', image: '' },
        { title: 'Goldfinger', image: 'https://upload.wikimedia.org/wikipedia/en/f/f8/The_Goldfinger.png' },
        { title: 'Pan', image: 'https://upload.wikimedia.org/wikipedia/en/5/50/Pan_2015_poster.jpg' },
        { title: 'Logan', image: 'https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_.jpg' },
        { title: 'The Legend of Tarzan', image: '' },
        { title: 'Iron Man', image: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Iron Man 2', image: '' },
        { title: 'Thor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcJJt7e5d0I3t6G4_I2GfWYG2bg5LjHPEP0-0Vg_S6tfpLRHd1AokgqzxLMfigK6XhD4DtJRyrHFjT5w-6bAme-DXxiA0Wnm86jofWvY&s' },
        { title: 'Captain America: The First Avenger', image: '' },
        { title: 'The Avengers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR463Ch5FhY9M_Z-LcG-sBieowOeR7znmiS4KCWAmhAjUMupL2Zl-be7I_TZoHcbtf_Pke9gQimmPnaVCScjOV8FGUWeAOattik7Id12g&s=10' },
        { title: 'Iron Man 3', image: '' },
        { title: 'Kingsman: The Golden Circle', image: '' },
        { title: 'The King\'s Man', image: '' },
        { title: 'Thor: The Dark World', image: '' },
        { title: 'Captain America: The Winter Soldier', image: '' },
        { title: 'Guardians of the Galaxy(2014)', image: '' },
        { title: 'Avengers: Age of Ultron', image: '' },
        { title: 'Ant-Man(2015)', image: '' },
        { title: 'Captain America: Civil War', image: '' },
        { title: 'Doctor Strange(2016)', image: '' },
        { title: 'Guardians of the Galaxy Vol. 2', image: '' },
        { title: 'Spider-Man: Homecoming', image: '' },
        { title: 'Thor: Ragnarok', image: '' },
        { title: 'Black Panther', image: '' },
        { title: 'Avengers: Infinity War', image: '' },
        { title: 'Ant-Man and the Wasp', image: '' },
        { title: 'Captain Marvel', image: '' },
        { title: 'Avengers: Endgame', image: '' },
        { title: 'Thunderbolts*', image: ''},
        { title: 'Deadpool & Wolverine', image: '' },
        { title: 'Guardians of the Galaxy Vol. 3', image: '' },
        { title: 'Ant-Man and the Wasp: Quantumania', image: '' },
        { title: 'Black Panther: Wakanda Forever', image: '' },
        { title: 'Thor: Love and Thunder', image: '' },
        { title: 'Doctor Strange in the Multiverse of Madness', image: '' },
        { title: 'Spider-Man: No Way Home', image: '' },
        { title: 'Eternals', image: '' },
        { title: 'Venom: Let There Be Carnage', image: '' },
        { title: 'Shang-Chi and the Legend of the Ten Rings', image: '' },
        { title: 'Spider-Man: Far from Home', image: '' },
        { title: 'The Amazing Spider-Man', image: '' },
        { title: 'The First Purge', image: '' },
        { title: 'The Purge(2013)', image: '' },
        { title: 'The Purge: Anarchy', image: '' },
        { title: 'The Purge: Election Year', image: '' },
        { title: 'The Forever Purge', image: '' },
        { title: 'All for the Winner (赌圣)', image: '' },
        { title: 'Fight Back to School (逃学威龙)', image: '' },
        { title: 'Flirting Scholar (唐伯虎点秋香)', image: '' },
        { title: 'A Chinese Odyssey: Part One - Pandora\'s Box(1995)', image: '' },
        { title: 'A Chinese Odyssey: Part 2 - Cinderella(1995)', image: '' },
        { title: 'Out of the Dark (回魂夜)', image: '' },
        { title: 'The God of Cookery (食神)', image: '' },
        { title: 'The Tricky Master (千王之王2000)', image: '' },
        { title: 'King of Comedy (喜剧之王)', image: '' },
        { title: 'Shaolin Soccer (少林足球)', image: '' },
        { title: 'Kung Fu Hustle (功夫)', image: '' },
        { title: 'CJ7 (长江七号)', image: '' },
        { title: 'Journey to the West: Conquering the Demons (西游·降魔篇)', image: '' },
        { title: 'The Mermaid (美人鱼)', image: '' },
        { title: 'Journey to the West: The Demons Strike Back (西游·伏妖篇)', image: '' },
        { title: 'The New King of Comedy (新喜剧之王)', image: '' },
        { title: 'It(2017)', image: '' },
        { title: 'It: Chapter Two', image: '' },
        { title: 'The Conjuring', image: '' },
        { title: 'The Conjuring 2', image: '' },
        { title: 'The Conjuring: The Devil Made Me Do It', image: '' },
        { title: 'Annabelle', image: '' },
        { title: 'Annabelle: Creation', image: '' },
        { title: 'Annabelle Comes Home', image: '' },
        { title: 'Saw(2004)', image: '' },
        { title: 'Wrong Turn', image: '' },
        { title: 'Final Destination(2000)', image: '' },
        { title: 'Pacific Rim(2013)', image: '' },
        { title: 'Pacific Rim: Uprising', image: '' },
        { title: 'Godzilla (2014)', image: '' },
        { title: 'Godzilla: King of the Monsters', image: '' },
        { title: 'Godzilla vs. Kong', image: '' },
        { title: 'Godzilla x Kong: The New Empire', image: '' },
        { title: '2012', image: '' },
        { title: 'Dracula Untold(2014)', image: '' },
        { title: 'The Rooftop (天台爱情)', image: '' },
        { title: 'Jian Bing Man', image: '' },
        { title: 'Hello Mr. Billionaire', image: '' },
        { title: 'Johnny English', image: '' },
        { title: 'Johnny English Reborn', image: '' },
        { title: 'Johnny English Strikes Again', image: '' },
        { title: 'Jumanji Cruise(2021)', image: '' },
        { title: 'Jumanji: The Next Level', image: '' },
        { title: 'Skyscraper(2018)', image: '' },
        { title: 'Rampage(2018)', image: '' },
        { title: 'Jumanji: Welcome To The Jungle', image: '' },
        { title: 'Pac-Man', image: '' },
        { title: 'Fast & Furious(2009)', image: '' },
        { title: 'Central Intelligence', image: '' },
        { title: 'San Andreas(2015)', image: '' },
        { title: 'How to Make Millions Before Grandma Dies', image: ''},
        { title: 'House of Wax', image: ''},
        { title: 'Weapons(2025)', image: ''},
        { title: 'A Nightmare on Elm Street(2010)', image: ''},
        { title: 'Lucy(2014)', image: ''},

      ],
    },
    {
      id: 'series',
      title: 'Series',
      items: [
        { title: 'Breaking Bad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcWkpWG_NRrU2M8-WB8EbEcJk7smhdrY1eO0ttKXm0bo2ooOEWxk3zBSbsFrSgSJh2OEKOQ&s=10' },
        { title: 'Loki', image: 'https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_.jpg' },
        { title: 'Moon Knight', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrQwJc2BoO0ZYYkWGrWeE8BmtxDo5HLCEWnfJU4uXOIvgOfgqDU7map9pRcE11BCesOz-bkMAuvcwB7HLQV-ry9h9afEN4PqDkbYDTQ&s=10' },
        { title: 'The Walking Dead', image: 'https://upload.wikimedia.org/wikipedia/en/0/0e/TheWalkingDeadPoster.jpg'},
        { title: 'Sherlock', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqbkWE9oLI8LNuwNkbNx02MlXhYXYvzLE9A&s' },
        { title: 'To Us, From Us', image: '' },
        { title: 'WandaVision', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7l5fnpdMP1Mb23WhV7Qd2765UYtOKVxfQ3wQ1Dw_KTE6zt6B4jrY7yD-o71sRXUSwrqEU-fq6WkNbKt-IjzBTz1-NK0FPN9CNcwMwDQ&s=10' },
        { title: 'Three-Body', image: '' },
        { title: 'Put Your Head on My Shoulder', image: 'https://upload.wikimedia.org/wikipedia/zh/4/42/Put_your_head_on_my_shoulder.jpg' },

      ],
    },
    {
      id: 'books',
      title: 'Books',
      items: [
        { title: 'Flowers for Algernon', image: 'https://m.media-amazon.com/images/I/819dTM9Lz5L._UF1000,1000_QL80_.jpg' },
        { title: 'Limitless', image: 'https://m.media-amazon.com/images/I/71EXYqf6EKL._AC_UF1000,1000_QL80_.jpg' },
        { title: '不便的便利店', image: 'https://www.cite.com.my/images/p_download/1291738.png' },
        { title: '焦虑的人', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597575031l/49127718.jpg' },
        { title: 'C Programming: A Modern Approach', image: 'https://i.ebayimg.com/images/g/HAQAAOSwXNpnirs9/s-l2400.jpg' },
        { title: 'Head First C', image: 'https://m.media-amazon.com/images/I/71So4WBMAPL._AC_UF1000,1000_QL80_.jpg' },
        { title: '吃土', image: 'https://m.media-amazon.com/images/I/81tKwGVSY4L._AC_UF1000,1000_QL80_.jpg' },
        { title: '雪洞', image: 'https://www.cite.com.my/images/p_download/1198449.jpg' },
        { title: '深度工作', image: 'https://m.media-amazon.com/images/I/71pqZChaJkL._AC_UF894,1000_QL80_.jpg' },
        { title: '你一生的故事', image: 'https://book.goldenhouse.com.my/wp-content/uploads/2023/03/niyishengdegushi-820x820.jpg'},
      ],
    },
  ];

  var gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(135deg, #f5576c 0%, #ff6f91 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  ];

  var coverCache = new Map();
  var pendingCovers = new Map();

  try {
    var saved = localStorage.getItem('wiki_cover_cache');
    if (saved) {
      var parsed = JSON.parse(saved);
      for (var key in parsed) {
        coverCache.set(key, parsed[key]);
      }
    }
  } catch (e) {}

  function saveCoverCache() {
    try {
      var obj = {};
      coverCache.forEach(function (v, k) { if (v !== null) obj[k] = v; });
      localStorage.setItem('wiki_cover_cache', JSON.stringify(obj));
    } catch (e) {}
  }

  function fetchIMDbCover(title) {
    if (coverCache.has('imdb:' + title)) return Promise.resolve(coverCache.get('imdb:' + title));

    var firstChar = title.charAt(0).toLowerCase();
    var cbName = 'imdb_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    var url = 'https://v2.sg.media-imdb.com/suggestion/' + firstChar + '/'
      + encodeURIComponent(title) + '.json?callback=' + cbName;

    return new Promise(function (resolve) {
      window[cbName] = function (data) {
        delete window[cbName];
        var imgUrl = null;
        if (data && data.d && data.d.length > 0) {
          var item = data.d[0];
          if (item.i && item.i.imageUrl) imgUrl = item.i.imageUrl;
        }
        coverCache.set('imdb:' + title, imgUrl);
        resolve(imgUrl);
      };
      var script = document.createElement('script');
      script.src = url;
      script.onerror = function () { delete window[cbName]; coverCache.set('imdb:' + title, null); resolve(null); };
      document.head.appendChild(script);
    });
  }

  function searchWikipedia(title) {
    var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='
      + encodeURIComponent(title) + '&format=json&origin=*&srlimit=1&srprop=';
    return fetch(url).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.query && data.query.search && data.query.search.length > 0) {
          return data.query.search[0].title;
        }
        return null;
      });
  }

  function fetchCover(title) {
    if (coverCache.has(title)) return Promise.resolve(coverCache.get(title));
    if (pendingCovers.has(title)) return pendingCovers.get(title);

    var p = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.originalimage && data.originalimage.source) {
          return data.originalimage.source;
        }
        return searchWikipedia(title).then(function (found) {
          if (!found || found === title) return null;
          return fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(found))
            .then(function (r) { return r.ok ? r.json() : null; })
            .then(function (d) {
              return (d && d.originalimage && d.originalimage.source) ? d.originalimage.source : null;
            });
        });
      })
      .then(function (url) {
        coverCache.set(title, url);
        return url;
      })
      .catch(function () {
        coverCache.set(title, null);
        return null;
      });

    pendingCovers.set(title, p);
    return p;
  }

  function escapeHtml(text) {
    var d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  function renderSection(category, index) {
    var html = '<div class="list-section" data-category="' + category.id + '">'
      + '<h2 class="list-section-title">' + escapeHtml(category.title) + '</h2>'
      + '<div class="list-scroll-wrapper">'
      + '<button class="list-arrow list-arrow-left" data-target="' + category.id + '">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>'
      + '</button>'
      + '<div class="list-scroll-container" id="scroll-' + category.id + '">';

    for (var i = 0; i < category.items.length; i++) {
      var item = category.items[i];
      var imdb = coverCache.get('imdb:' + item.title);
      var wiki = coverCache.get(item.title);
      var hasImage = !!(item.image || imdb || wiki);
      var imgUrl = item.image || imdb || wiki;
      var bg = hasImage ? "url('" + imgUrl + "')" : gradients[(index + i) % gradients.length];
      html += '<div class="list-item" id="list-item-' + category.id + '-' + i + '">'
        + '<div class="list-item-cover' + (hasImage ? '' : ' list-item-cover-gradient') + '"'
        + ' style="background-image: ' + bg + '; background-size: cover; background-position: center;">'
        + (hasImage ? '' : '<svg class="list-item-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2.18"/><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/></svg>')
        + '</div>'
        + '<div class="list-item-title">' + escapeHtml(item.title) + '</div>'
        + '</div>';
    }

    html += '</div>'
      + '<button class="list-arrow list-arrow-right" data-target="' + category.id + '">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
      + '</button>'
      + '</div>'
      + '</div>';

    return html;
  }

  function updateCover(el, url) {
    var cover = el.querySelector('.list-item-cover');
    if (!cover) return;
    var grad = cover.style.backgroundImage;
    cover.style.backgroundImage = "url('" + url + "'), " + grad;
    cover.classList.remove('list-item-cover-gradient');
    var icon = cover.querySelector('.list-item-icon');
    if (icon) icon.remove();
  }

  function fetchAllCovers() {
    var allItems = [];
    for (var c = 0; c < categories.length; c++) {
      for (var i = 0; i < categories[c].items.length; i++) {
        allItems.push({ catId: categories[c].id, index: i, item: categories[c].items[i] });
      }
    }

    var active = 0;

    function done() {
      active--;
      if (allItems.length > 0) {
        processNext(allItems.shift());
      } else if (active === 0) {
        saveCoverCache();
      }
    }

    function processNext(info) {
      if (info.item.image) { done(); return; }

      var imdbCached = coverCache.get('imdb:' + info.item.title);
      var wikiCached = coverCache.get(info.item.title);
      var el = document.getElementById('list-item-' + info.catId + '-' + info.index);

      if (imdbCached) { if (el) updateCover(el, imdbCached); done(); return; }

      // IMDb already failed, try Wikipedia directly
      if (imdbCached === null) {
        if (wikiCached !== undefined) { done(); return; }
        active++;
        fetchCover(info.item.title).then(function (wikiUrl) {
          if (wikiUrl && el) updateCover(el, wikiUrl);
          done();
        });
        return;
      }

      active++;
      fetchIMDbCover(info.item.title).then(function (imdbUrl) {
        if (imdbUrl && el) { updateCover(el, imdbUrl); done(); return; }
        if (wikiCached !== undefined) { done(); return; }
        fetchCover(info.item.title).then(function (wikiUrl) {
          if (wikiUrl && el) updateCover(el, wikiUrl);
          done();
        });
      });
    }

    for (var i = 0; i < 3 && allItems.length > 0; i++) {
      processNext(allItems.shift());
    }
  }

  function renderList() {
    var container = document.getElementById('list-content');
    if (!container) return;

    var html = '';
    for (var i = 0; i < categories.length; i++) {
      html += renderSection(categories[i], i);
    }
    container.innerHTML = html;

    document.querySelectorAll('.list-arrow').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById('scroll-' + btn.getAttribute('data-target'));
        if (!target) return;
        var itemWidth = target.querySelector('.list-item')?.offsetWidth || 140;
        var gap = 12;
        var dir = btn.classList.contains('list-arrow-left') ? -1 : 1;
        target.scrollBy({ left: dir * (itemWidth + gap) * 8, behavior: 'smooth' });
      });
    });

    fetchAllCovers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderList);
  } else {
    renderList();
  }

  document.addEventListener('page:swapped', renderList);
})();
