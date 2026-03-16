function Notification(){

  const isAdmin = true

  return(
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
      {isAdmin && <h2>Farima ayaa kuyala</h2>}
    </div>
  )
}
export default Notification;