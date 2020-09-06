import React, { Component } from 'react';
import Api from '../axios/Api';

class Edit extends Component {

    state ={
        id_produk : '', 
        nama_produk : '', 
        harga_produk : '', 
        stok : '', 
        keterangan : '' 
    }

    async componentDidMount(){
        let id = this.props.match.params.id_produk 
        const response = await Api.get('getOne.php?id_produk='+id)
        this.setState({
            id_produk : response.data.id_produk, 
            nama_produk : response.data.nama_produk, 
            harga_produk : response.data.harga_produk, 
            stok : response.data.stok, 
            keterangan : response.data.keterangan
        })
    }

    handleInput =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async(e)=>{
        e.preventDefault()
        let id = this.state.id_produk
        await Api.put('update.php?id_produk='+id,this.state)
        .then(response=>{
            if (response.data === 'berhasil') {
                this.props.history.push('/')
            }
        })
    }
    
    render() {
        return (
            <div className="row mt-3">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center">Edit Produk</h2>
                                <div className="form-group">
                                    <label>Nama Produk</label>
                                    <input type="text" name="nama_produk" value={this.state.nama_produk} onChange={this.handleInput} className="form-control" placeholder="nama produk .."></input>
                                </div>
                                <div className="form-group">
                                    <label>Harga Produk</label>
                                    <input type="text" name="harga_produk" value={this.state.harga_produk} onChange={this.handleInput} className="form-control" placeholder="harga.." ></input>
                                </div>

                                <div className="form-group">
                                    <label>Stok Produk</label>
                                    <input type="text" name="stok" value={this.state.stok} onChange={this.handleInput} className="form-control" placeholder="stok"></input>
                                </div>
                                <div className="form-group">
                                    <label>Keterangan Produk</label>
                                    <textarea type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleInput} className="form-control" placeholder="keterangan"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Simpan</button>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}

export default Edit;