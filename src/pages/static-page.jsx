export default function Home(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = {
        title: 'Hello World',
        description: 'This is a description',
    }

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: data
    }
}