import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
}

export function ManComponent (props: PropsType) {
    const {title} = props;
    const {name} = props.man
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>
}