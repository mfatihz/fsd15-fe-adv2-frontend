const Premium = () => {
    return (
        <main className="flex flex-col gap-10">
            <h1>Kenapa Harus Berlangganan</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
            </div>
            <div>
                <h1>Pilih Paketmu</h1>
                <p>Temukan paket sesuai kebutuhanmu!</p>
                <div className="flex flex-col sm:flex-row gap-10">
                    <div>Individual</div>
                    <div>Berdua</div>
                    <div>Keluarga</div>
                </div>
            </div>
        </main>
    )
}

export default Premium;