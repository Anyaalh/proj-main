type TasksPropsType ={
    title: string
    task: TaskPropsType[]
    names: Array<string>
}

type TaskPropsType = {
    taskId: number
    title:string
    isDone: boolean
}



export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.task.map(el=>{
                    return(
                        <li><input type={"checkbox"} checked={el.isDone}/>{el.title}</li>
                    )
                })}


                {/*<li><input type={"checkbox"} checked={props.task[0].isDone}/>{props.task[0].title}</li>*/}
                {/*<li><input type={"checkbox"} checked={props.task[1].isDone}/>{props.task[1].title}</li>*/}
            </ul>
            <span>{props.names}</span>
        </div>

    )
}