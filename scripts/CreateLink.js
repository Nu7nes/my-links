const userName = ['nu7nes']
export const links = ['github', 'linkedin', 'instagram', 'twitter'];

export default function CreateLink(link){
    return `https://${link}.com/${userName[0]}`
}