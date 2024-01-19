const Users = () => {
    const myArray = [
      { id: 1, name: 'Justin', type: 'string' },
      { id: 2, name: 'mbugua', type: 'string' },
      { id: 3, name: 'maita', type: 'string' },
      { id: 4, label: 'four', type: 'non-string' },
      { id: 5, data: { key: 'value' }, type: 'non-string' },
    ];
  
    return (
      <>
        {myArray.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>
        })}
      </>
    )
  } 

  
export default Users