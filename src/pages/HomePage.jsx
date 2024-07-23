
const HomePage = () => {
    return (
        <>
            <h1 className=" ">MOONSHINE ANIMATIONS</h1>
            <div className="d-flex ">
                <div className="card p-2 flex-grow-1 ">
                    <p>Youtube Video</p>
                    <iframe  width="1000" height="800" src="https://www.youtube.com/embed/w5aH4g_U0PY?si=QTrAuHPtoeAhyhM3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>

                <div className="card p-2 h-100">
                    <p>Vlog/Blog</p>
                    <div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage