import { useState } from "react"
import { HostList } from "./HostList"
import { ListSearch } from "./ListSearch"

export const HostListSearchContainer = () => {
    const [userSearchTerms, setTerms] = useState("")

    return <>
        <ListSearch setTerms={setTerms} />
        <HostList userSearchTerms={userSearchTerms} />
    </>
}