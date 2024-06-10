import React, { useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditClothes = () => {
  const {id} = useParams();
  const {productName, imageURL, color, productPrice, productDescription} = useLoaderData();
  
 
  const handleUpdate = (event) => {
      event.preventDefault();
      const form =  event.target;

      const productName = form.productName.value;
      const imageURL = form.imageURL.value;
      const color = form.color.value;
      const productPrice = form.productPrice.value;
      const productDescription = form.productDescription.value;
      

      const UpdateProductObj = {
       productName,imageURL,color,productPrice,productDescription
      }

      console.log(UpdateProductObj)

      fetch(`http://localhost:5000/product/${id}`,{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(UpdateProductObj)
      })
      .then(res => res.json())
      .then(data => {
        alert("Product updated successfully!!")
        form.reset();
      })
  
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Atualizar os dados do Produto</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>

            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="productName" 
                  value="Nome do Produto" 
                />
              </div>
                <TextInput 
                  id="productName" 
                  name="productName" 
                  type="text" 
                  placeholder="Nome do Produto" 
                  required
                  defaultValue={productName} 
                />
            </div>

            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="productColor" 
                  value="Cor do produto" 
                />
              </div>
                <TextInput 
                  id="color" 
                  name="color" 
                  type="text" 
                  placeholder="Cor do produto" 
                  required
                  defaultValue={color} 
                />
            </div>
        </div>

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label 
                  htmlFor="imageURL" 
                  value="Foto do Produto" 
                />
              </div>
                <TextInput 
                  id="imageURL" 
                  name="imageURL" 
                  type="text" 
                  placeholder="Foto do Produto" 
                  required
                  defaultValue={imageURL} 
                />
            </div>
            <div>

          <div className="mb-2 block">
              <Label 
                htmlFor="productPrice" 
                value="Preço do produto" 
              />
            </div>
              <TextInput 
                id="productPrice" 
                name="productPrice" 
                type="text" 
                placeholder="Preço do produto"
                defaultValue={productPrice} 
                required 
              />
          </div>
            
            </div>

            <div>
              <div className="mb-2 block">
                <Label 
                htmlFor="bookDescription" 
                value="Descrição do seu livro" />
              </div>

              <Textarea 
              id="bookDescription"
              name='bookDescription'
              placeholder="Escreva a descrição do seu livro..." 
              required 
              rows={6}
              defaultValue={productDescription} 
              />
            </div>
                  
          <Button className='mt-5' type="submit">Atualizar Produto</Button>
        </form>
    </div>
  )
}

export default EditClothes