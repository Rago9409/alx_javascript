#!/usr/bin/node
import requests
import sys

def get_movie_title(movie_id):
    url = f"https://swapi-api.alx-tools.com/api/films/{movie_id}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()["title"]
    else:
        return None

if __name__ == "__main__":
    movie_id = sys.argv[1]
    title = get_movie_title(movie_id)
    if title is None:
        print(f"No movie found with ID {movie_id}")
    else:
        print(title)
