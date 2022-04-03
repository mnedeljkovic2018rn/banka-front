import React from "react"

import Section from "../../components/common/Section"

export default function PrivacyPage() {
    return (
        <div className="flex flex-col gap-4">
            <Section title= "Šifra" button="Promenite šifru"/>
            <Section title= "2-faktor autentifikacija" button="Podesite"/>
        </div>
    )
}