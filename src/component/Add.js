import React, { Component } from 'react';
import Api from '../axios/Api';

class Add extends Component {
    
    state = {
        nama_produk : '',
        harga_produk : '',
        stok : '',
        keterangan : ''
    }
    
    handleInput =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        await Api.post('add.php',this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center">Tambah Produk</h2>
                                <div className="form-group">
                                    <label>Nama Produk</label>
                                    <input type="text" name="nama_produk" onChange={this.handleInput} className="form-control" placeholder="nama produk .."></input>
                                </div>
                                <div className="form-group">
                                    <label>Harga Produk</label>
                                    <input type="text" name="harga_produk" onChange={this.handleInput} className="form-control" placeholder="harga.." ></input>
                                </div>

                                <div className="form-group">
                                    <label>Stok Produk</label>
                                    <input type="text" name="stok" onChange={this.handleInput} className="form-control" placeholder="stok"></input>
                                </div>
                                <div className="form-group">
                                    <label>Keterangan Produk</label>
                                    <textarea type="text" name="keterangan" onChange={this.handleInput} className="form-control" placeholder="keterangan"></textarea>
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

export default Add;