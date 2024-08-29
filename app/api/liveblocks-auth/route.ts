import { liveBlocks } from '@/lib/liveblocks'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getUserColor} from '@/lib/utils'



export async function POST(request: Request){
const clerkUser = await currentUser()
if(!clerkUser) redirect('/sign-in')

    const {id, firstName, lastName, emailAddresses, imageUrl} = clerkUser;

    const user = {
        id,
        info: {
            id,
            name: `${firstName} ${lastName}`,
            emailAdress: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            color: getUserColor(id)
        }
    }


    const {status, body} = await liveBlocks.identifyUser({
        userId: user.info.email,
        groupIds: []
    },
    {userInfo: user.info}
)
return new Response(body, {status})
}
