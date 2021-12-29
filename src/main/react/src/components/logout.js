import React, { useState, useContext, useEffect } from "react";
import {useHistory} from "react-router-dom"

export function Logout() {
    const history = useHistory()

    useEffect(async () => {
        localStorage.clear();
    }, [])

    return null;
}