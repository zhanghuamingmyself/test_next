


const Page = ({stars}) =>
    <div>
        Next stars: {stars}
    </div>

Page.getInitialProps = async ({req}) => {
    import { readFileSync } from 'fs'
    import path from "path"
    const res = await fetch('/api/hello')
    const json = await res.json()
    const user = readFileSync(path.join(process.cwd(), 'data', `user.json`), 'utf-8')
    console.log(user);
    return {stars: JSON.stringify(json), file: user}
}

export default Page