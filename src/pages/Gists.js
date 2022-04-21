import { CircularProgress } from "@mui/material"
import { useEffect, useState,useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_URL_PUBLIC } from "../Components/constants/gists"
import { selectGists,selectGistsLoading, selectGistsError } from "../Components/store/gists/selectors"
import { getAllGists } from "../Components/store/gists/actions"

const Gists = () => {
const dispatch = useDispatch()
const gists = useSelector(selectGists)
const loading = useSelector(selectGistsLoading)
const error = useSelector(selectGistsError)

const requestGists = useCallback(async() => {
    dispatch(getAllGists())
},[])

useEffect(() => {
    requestGists()
}, [])

const renderGist = useCallback((gist) => (
<li key = {gist.id}>{gist.description || 'No desctiption'}</li>), [])

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
            <h3>Oops!</h3>
            <button onclick={requestGists}>Try again!</button>
            
            </>
        )
    }

    return (
       <ul>
    {gist.map(renderGist)}
       </ul> 
    )
}

export default Gists