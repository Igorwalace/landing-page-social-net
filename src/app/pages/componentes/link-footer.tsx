import Link from "next/link"

interface ValueLink {
    valueLink: string
}

const Footer_Links = ({ valueLink }: ValueLink) => {
    return (
        <>
            <Link className="hover:underline" href='https://meu-website-igor.vercel.app/'>{valueLink}</Link>
        </>
    )
}

export default Footer_Links