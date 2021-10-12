from googleapiclient.discovery import build
from fastapi import FastAPI

app = FastAPI()

api_key='AIzaSyDD5JQAVEI0d799UkDZa8M_KnOew_Nsf_M'
youtube = build('youtube', 'v3', developerKey=api_key)

@app.get("/searchresult/{query}")
def read_item(query):
    request = youtube.search().list(
        part='snippet',q=query,
        maxResults=10
    )

    response= request.execute()
    # print(response)

    # for i in response['items']:
    #     print(i['snippet']['title'])
    #     print(i['snippet']['thumbnails']['default']['url'])

    return response