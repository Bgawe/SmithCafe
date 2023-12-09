import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Orders.scss';
import Pay from '../pembayaran/payment';

function Orders() {
  const navigate = useNavigate();
  const emptyOrder = (
    <div className="empty-order">
      <h2>EMPTY ORDER</h2>
      <div>
        <button type="submit" onClick={() => navigate(-1)}>
          Back to menu
        </button>
      </div>
    </div>
  );

  const chooseOrderedFoods = (state) => {
    const arr = [];
    state.forEach((element) => {
      element.list.forEach((el) => {
        if (el.order > 0) {
          arr.push({ ...el, CatagoryId: element.id });
        }
      });
    });

    return arr;
  };

  const orderedMeal = useSelector((state) => chooseOrderedFoods(state.meals));

  // Fungsi untuk menghitung total harga pesanan
  const calculateTotalPrice = () => {
    let total = 0;
    orderedMeal.forEach((el) => {
      total += el.order * el.price;
    });
    return total;
  };
 
  const handlePaymentSuccess = () => {
    // Tampilkan alert pembayaran sukses
    alert("Pembayaran sukses!");
  
    // Kembali ke halaman /home
    navigate('/');
  };

  const [name, setName] = useState('');
  const [no, setAddress] = useState('');
  const [note, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="mealss-container">
      <h1>Pesanan Saya</h1>

      {orderedMeal.length > 0 ? (
        <div>
          {orderedMeal.map((el) => (
            <Pay pay={el} CatagoryId={el.CatagoryId} key={uuidv4()} />
          ))}
          <div className="total">
            <h4>Total Semua</h4>
            <h4>{calculateTotalPrice()}k</h4>
          </div>
        </div>
      ) : (
        emptyOrder
      )}
    <div className='heh'>
      <h4>Nama Pemesan</h4>
      <form className='form'>
          <input type="text" value={name} onChange={handleNameChange} placeholder='Nama anda'/><br />
          <input type="text" value={no} onChange={handleAddressChange} placeholder='Nomor Meja' /><br />
          <input type="text" value={note} onChange={handlePhoneNumberChange} placeholder='Catatan'/>
      </form>
    </div>

     <button className='button-5' onClick={handlePaymentSuccess}>Bayar</button>
    
    </div>
  );
}

export default Orders;
