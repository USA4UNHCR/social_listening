import argparse
import getpass

from json_processing_utils import get_MongoDB_client, connect_tweetsdb
from json_processing_utils import get_json, insert_many_tweets_mongodb


FILEPATH = '../../data/twitter'


def main():
    cluster = 'boysenberry-hl61l.mongodb.net'

    parser = argparse.ArgumentParser()
    parser.add_argument(
        'filename',
        type=str,
        nargs=1,
        help='Provide name of file that contains tweets (as jsons).',
    )
    args = parser.parse_args()

    username = input("Username: ")
    pw = getpass.getpass()

    connection_string = 'mongodb+srv://{}:{}@{}/test?retryWrites=true'.format(
        username,
        pw,
        cluster
    )

    client = get_MongoDB_client(connection_string) 
    db = connect_tweetsdb(client)

    jsons = get_json(FILEPATH, args.filename)
    insert_many_tweets_mongodb(db, jsons)
    print('\n\nDone. Exiting.\n\n')


if __name__ == "__main__":
    '''
    Inserts tweets from tweet file into MongoDB. Input:

        [command line] filename
        [prompted] username, password

    The cluster name is set in this script.'''

    main()


