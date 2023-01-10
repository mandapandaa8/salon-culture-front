export const ListSearch = ({ setTerms }) => {


    return <div class="flexbox">
        <div class="search">
            <div>
                <input
                    onChange={(changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }}
                    type="text" placeholder="Search . . ." required>
                </input>
            </div>
        </div>
    </div>
}