const Home = () => {
    return (
        <div className="flex flex-col justify-center w-full items-center">
            <img
                src={"/logo-large.png"}
                width={512}
                alt={"DECAfe Large Logo"}
            />

            <h1 className={"px-8 mt-4 montserrat text-lg"}>
                Your one-stop destination at Burnsville High School for drink &
                snacks.
            </h1>
        </div>
    )
}

export default Home