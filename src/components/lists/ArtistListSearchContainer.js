import { useState } from "react"
import { ArtistList } from "./ArtistList"
import { ListSearch } from "./ListSearch"

export const ArtistListSearchContainer = () => {
    const [userSearchTerms, setTerms] = useState("")

    return <>
        <ListSearch setTerms={setTerms} />
        <ArtistList userSearchTerms={userSearchTerms} />
    </>
}