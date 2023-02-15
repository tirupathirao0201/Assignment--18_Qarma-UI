// model model for alert tab component
export interface Alert{
    alert_type:string,
    label:string,
    toConfirmMessage:string,
    content:string,
    rightsGoingToLoss:string[]
}

// model for common tab component
export interface TabHorizontalItems{
    item:string,
    isSelected:boolean
}

// model for common toast component
// timeout in milliseconds
export interface Toast{
    msg:string;
    type: "" | "success" | "error" | "info" ;
    timeout:number;
    
}
