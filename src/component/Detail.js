import React, { Component } from 'react';
import Api from '../axios/Api';
import {Link} from 'react-router-dom'

class Detail extends Component {
    rupiah =(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    async componentDidMount(){
        let id = this.props.match.params.id_produk
        await Api.get('getOne.php?id_produk='+id)
        .then(response=>{
            this.setState({
                id_produk : response.data.id_produk,
                nama_produk : response.data.nama_produk,
                harga_produk : response.data.harga_produk,
                stok : response.data.stok,
                keterangan : response.data.keterangan
            })
        })
    }
    state = {
        id_produk : '',
        nama_produk : '',
        harga_produk : '',
        stok : '',
        keterangan : ''
    }
    delete = async (id)=>{
        console.log(id)
        await Api.delete('delete.php?id_produk='+id)
        .then(response=>{
            if (response.data === 'berhasil') {
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                <div className="col-4 mt-3">
                    <div className="card" >
                        <div className="card-body" >
                            <h3 className="text-center">{this.state.nama_produk}</h3>
                            <p>harga : Rp.{this.rupiah(this.state.harga_produk)}</p>
                            <p>stok : {this.state.stok}</p>
                            <Link to={'/edit/'+this.state.id_produk} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-danger ml-2" onClick={this.delete.bind(this, this.state.id_produk)} >Hapus</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Detail;