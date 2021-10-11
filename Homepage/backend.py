from googleapiclient.discovery import build

api_key='AIzaSyDD5JQAVEI0d799UkDZa8M_KnOew_Nsf_M'
youtube = build('youtube', 'v3', developerKey=api_key)

request = youtube.search().list(
    part='snippet',
)