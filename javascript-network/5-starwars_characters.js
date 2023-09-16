#!/usr/bin/node
import requests
import sys

def get_movie_characters(movie_id):
    url = f"https://swapi-api.alx-tools.com/api/films/{movie_id}"
    response = requests.get(url)
    if response.status_code == 200:
        characters = response.json()["characters"]
        for character_url in characters:
            character = requests.get(character_url).json()
            print(character["name"])
    else:
        print(f"No movie found with ID {movie_id}")

if __name__ == "__main__":
    movie_id = sys.argv[1]
    get_movie_characters(movie_id)

