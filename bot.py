import discord
import asyncio
import random

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.event
async def on_message(message):

    if message.content.startswith('bot denounce someone'):
        await client.send_message(message.channel, 'Type $name namehere')
        def check(msg):
            return msg.content.startswith('$name')
        message = await client.wait_for_message(author=message.author, check=check)
        name = message.content[len('$name'):].strip()
        await client.send_message(message.channel, '{} is a noob'.format(name))
    elif message.content.startswith('$react'):
        msg = await client.send_message(message.channel, ':ok_hand:')
        res = await client.wait_for_reaction(':ok_hand:')
        res = await client.wait_for_reaction(message=msg, check=check)
        await client.send_message(message.channel, '{0.user} reacted with {0.reaction.emoji}!'.format(res))
 



client.run('MzUxNzk0NDU5MTA2NjA3MTA0.DYjDhA.aJUDKTEUUD8bEVuPj5khWI3SXlY', bot=True)
