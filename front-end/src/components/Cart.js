function Cart() {
  const template1Price = 20
  const template2Price = 30
  const Template3Price = 40
  const Template4Price = 50
  const Template5Price = 60

  return (
    <div className="affichage">
      <h2>🛒 Votre Panier</h2>
      <ul className="StylePanier">
        <li>Thème CV 1 : {template1Price} €</li>
        <li>Thème CV 2 : {template2Price} €</li>
        <li>Thème CV 3 : {Template3Price} €</li>
        <li>Thème CV 4 : {Template4Price} €</li>
        <li>Thème CV 5 : {Template5Price} €</li>
      </ul>
      Total :
      {template1Price +
        template2Price +
        Template3Price +
        Template4Price +
        Template5Price}
      €
    </div>
  )
}
export default Cart