import EditTaskForm from "@/components/EditTaskForm"

const getTopicsById = async(id) =>{
    try{
        const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}` , {
            cache: "no-store"
        })
        if(!res.ok){
            throw new Error('Failed to fetch task')
        }
        
        return res.json();
    }catch(error){
        console.log(error)


    }
}

export default async function EditTask ({params}){
    const {id} = params 
    const {topic} = await getTopicsById(id)
    const {title,description} = topic
    
    
    
    return  <EditTaskForm id={id} title={title} description={description} />



       
    



}