import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postProduct } from "../../redux/products/productsActions"
import React from "react";
//import fs from "fs"


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
 

  const onSubmit = handleSubmit((data) => {
    // const file = new Blob([fs.readFileSync('ruta-de-la-imagen.jpg')], {
    //   type: 'image/jpeg', // Tipo MIME para imágenes JPEG
    // });
    // const formData = new FormData();
    // formData.append('imagen', file, 'nombre-de-la-imagen.jpg');

    let formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title",data.title)
    formData.append("price",data.price)
    formData.append("category",data.category)
    formData.append("stock",data.stock)
    formData.append("diet",data.diet)
    formData.append("flavor",data.flavor)
    formData.append("value",data.value)
    formData.append("type",data.type)

    dispatch(postProduct(formData))
    console.log(formData)
    alert("send")
  })

  return (
    <div className="bg-graym w-[600px] h-[800px] mt-5 mb-5 ml-[35%] px-5 py-5">
      <form onSubmit={onSubmit}>
        <NavLink to="/products">
          <button className="absolute ml-[-320px] mt-[-10px] rounded-none bg-orangeFred-300 py-[8px] px-[24px]  text-blackFred-300 outline-none hover:border-transparent">⇦back</button>
        </NavLink>
        <div className="relative mt-[-30px]">
        <h1 className="font-impact text-30xl mb-[10px] ">Add new Product</h1>
        <div>
          <label className="font-impact text-9xl mt-0">Title: </label>
          <br/>
          <input
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            type="text"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\s/g, ""))
            }
            {...register("title", {
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 3,
                message: "The title must be at least 3 letters",
              },
              maxLength: {
                value: 30,
                message: "The title cannot contain more than 30 letters.",
              },
            })}
            placeholder="Product title..."
            autoComplete="off"
          ></input>
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label className="font-impact text-9xl ">Product Image</label>
          <br/>
          <input
            className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            type="file"
            {...register("file", {
              required: {
                value: true,
                message: "required",
              },
            })}
          />
          {errors.file && <span>{errors.file.message}</span>}
        </div>

        <div>
          <label className="font-impact text-9xl mt-0 ">Price</label>
          <br/>
          <input
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            type="number"
            min="1"
            {...register("price", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <div>
          <label className="font-impact text-9xl ">Category</label>
          <br/>
          <select
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            {...register("category", {
              required: {
                value: true,
                message: "Please select a category",
              },
            })}
            defaultValue="food"
          >
           <option value="food">Food</option>
            <option value="suplement">Suplement</option>
            <option value="beverages">Beverages</option>
            <option value="vitaminAndMinerals">vitamins and minerals</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </div>

        <div>
          <label className="font-impact text-9xl ">Stock</label>
          <br/>
          <input
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            type="number"
            min="1"
            {...register("stock", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.stock && <span>{errors.stock.message}</span>}
        </div>
        <div>
          <label className="font-impact text-9xl ">Diet</label>
          <br/>
          <select
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            placeholder="Unspecified"
            {...register("diet", {
              required: {
                value: true,
                message: "Please select a diet",
              },
            })}
            defaultValue="Unspecified"
          >
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="keto">Keto</option>
            <option value="gluten Free">Gluten Free</option>
            <option value="Unspecified">Unspecified</option>
          </select>
          {errors.diet && <span>{errors.diet.message}</span>}
        </div>
        <div>
          <label className="font-impact text-9xl ">Flavor</label>
          <br/>
          <select
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            placeholder="Unspecified"
            {...register("flavor", {
              required: {
                value: true,
                message: "Please select a flavor",
              },
            })}
            defaultValue="Unspecified"
          >
            <option value="vainilla">Vainilla</option>
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
            <option value="fruity">Fruity</option>
            <option value="without Flavor">Without flavor</option>
            <option value="Unspecified">Unspecified</option>
          </select>
          {errors.flavor && <span>{errors.flavor.message}</span>}
        </div>

        <div>
          <label className="font-impact text-9xl ">Weight Value</label>
          <br/>
          <input
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            type="number"
            min="1"
            {...register("value", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.value && <span>{errors.value.message}</span>}
        </div>
        <div>
          <label className="font-impact text-9xl " >Type</label>
          <br/>
          <select
          className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium"
            {...register("type", {
              required: {
                value: true,
                message: "Please select a type",
              },
            })}
            defaultValue="gr"
          >
            <option value="gr">gr</option>
            <option value="ml">ml</option>
            <option value="kg">kg</option>
          </select>
          {errors.type && <span>{errors.type.message}</span>}
        </div>

        <button className="border-2 w-[300px] bg-graym border-orangeFred-100 h-10 pr-2 text-orangeFred-100 hover: hover:text-orangeFred-100 rounded-sm px-3 py-2 text-9xl font-medium" type="submit">Add Product</button>
        </div>
      </form>
    </div>
  )
}