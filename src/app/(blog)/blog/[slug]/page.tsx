export default async function BlogDetails({ params }: { params: { slug: string } }) {

    const { slug } = params;

    return (
        <div className="text-5xl flex items-center justify-center m-auto">
        <h1>{slug}</h1>
        </div>
    )

}