const Page = ({stars}) =>
    <div>
        Next stars: {stars}
    </div>

Page.getInitialProps = async ({req}) => {
    const res = await fetch('/api/hello')
    const json = await res.json()
    return {stars: JSON.stringify(json)}
}

export default Page
