import React, { Component } from 'react'
import Api from '../axios/Api'
import { Link } from 'react-router-dom'
class Home extends Component {

    state = {
        data : [],
        loading : true,
        error : false,
    }

    rupiah =(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    async componentDidMount(){
        await Api.get('get.php')
        .then(response=>{
            if (response.status === 200) {
                return response.data
            }else{
                throw new Error('gagal')
            }
        })
        .then(
            data=>{
                this.setState({
                    data : data,
                    loading : false,
                })
        })
        .catch(
            error => {
                this.setState({ loading:true,error:error })
        })
    }

    delete = async (id)=>{
        await Api.delete('delete.php?id_produk='+id)
        .then(response=>{
            if (response.data === 'berhasil') {
                window.location.reload()
            }
        })
    }
    
    render() {
        const { data,error,loading } = this.state
        if (loading) {
            return(
                <div style={{ marginTop : '15%',marginLeft:'50%' }}>
                    <img src="loading.gif" className="my-auto" alt="loading" ></img>
                </div>
            )
        }

        if (error) {
            return <p>error {error.message}</p>
        }

        const all = data.map(produk=>{
            return(
                <div className="col-4 mt-3" key={produk.id_produk}>
                    <div className="card" >
                        <div className="card-body" >
                            <h3 className="text-center">{produk.nama_produk}</h3>
                            <p>harga : Rp.{this.rupiah(produk.harga_produk)}</p>
                            <p>stok : {produk.stok}</p>
                            <Link to={'/detail/'+produk.id_produk} className="btn btn-primary">Detail</Link>
                        </div>
                    </div>
                </div>
            )
        })
        
        return (
            <div className="container">
                <div className="row mt-3">
                    {all}
                </div>
            </div>
        );
    }
}

export default Home;