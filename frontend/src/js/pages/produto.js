export default class Produto {

    listar = () =>
    {
        let index = document.getElementById("index");

        setClick = ( props ) =>
        {
           
            fetch (
                'https://gorest.co.in/public-api/products',
                {
                    method: 'GET',
                    headers: {
                        'Content-type' : 'application/json',
                        'Authorization': 'Bearer 4dd907bb208dc7dab3c57ed59162c857f919e36185d3c1eebb62447806fef3dc'
                    },
                    body: JSON.stringify(this.dado)
                }
            )
        }
    }
}