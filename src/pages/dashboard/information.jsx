import React from "react"
import Section from "../../components/common/Section"

export default function InformationPage() {


    return (
        <div className="flex flex-col gap-4">
            <Section title= "Osnovno" fields={[['Ime', 'Marko'], ['Prezime', 'Marković'], ['JMBG', '01012001700000'], ['pozicija', 'Šalterski radnik']]} />
            <Section title= "Kontakt" fields={[['e-mail', 'mmarko@gmail.com'], ['telefon', '064 1200170'], ]} />
        </div>
    )
}