const SectionHeader = ({ title }: {title: string}) => {
  return (
    <div>
          <h1 className="text-center text-3xl bg-title-color text-white py-2 rounded-md" > {title} </h1>  
    </div>
  )
}

export default SectionHeader