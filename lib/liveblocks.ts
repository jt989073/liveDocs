import {Liveblocks} from '@liveblocks/node'

export const liveBlocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET as string,
})