import { useForm } from "react-hook-form"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductId, postProduct } from "../../redux/products/productsActions"
import React, { useEffect } from "react";
//import fs from "fs"


export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const params = useParams()
  const { detail } = useSelector((state) => state.products);

  useEffect(() => {
    if (params.id) {
      dispatch(getProductId(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    // Set default values for the form fields when product_detail changes
    if (detail && params.id) {
      setValue('title', detail.title);
      setValue('file', detail.image); // You may need to handle file inputs differently
      setValue('price', detail.price);
      setValue('category', detail.category);
      setValue('stock', detail.stock);
      setValue('diet', detail.diet);
      setValue('flavor', detail.flavor);
      setValue('value', detail.weight?.value);
      setValue('type', detail.weight?.type);
    }
  }, [detail, setValue]);

  console.log(detail);
  console.log(detail.category);


  const onSubmit = handleSubmit((data) => {
    // const file = new Blob([fs.readFileSync('ruta-de-la-imagen.jpg')], {
    //   type: 'image/jpeg', // Tipo MIME para imágenes JPEG
    // });
    // const formData = new FormData();
    // formData.append('imagen', file, 'nombre-de-la-imagen.jpg');

    let formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title", data.title)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("stock", data.stock)
    formData.append("diet", data.diet)
    formData.append("flavor", data.flavor)
    formData.append("value", data.value)
    formData.append("type", data.type)

    dispatch(postProduct(formData))
    console.log(formData)
    alert("send")
  })

  return (
    <div className="flex flex-col rounded-lg bg-graym my-[50px] w-[1000px] h-[800px] m-auto ">
      <form onSubmit={onSubmit}>
        <NavLink to="/products">
          <button className="rounded-lg -ml-[905px]">⇦ back</button>
        </NavLink>
        <div>
          <h1 className="-mt-[20px] text-blackFred-300">Add new Product</h1>
          <div>
            <label className="">Title:</label>
            <br />
            <input
              type="text"
              onInput={(e) => (e.target.value = e.target.value.replace(/\s/g, ""))}
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
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div>
            <label>Product Image</label>
            <br />
            <input
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
            <label>Price</label>
            <br />
            <input
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
            <label>Category</label>
            <br />
            <select
              {...register("category", {
                required: {
                  value: true,
                  message: "Please select a category",
                },
              })}
              defaultValue="food"
            >
              <option value="Food">Food</option>
              <option value="Suplement">Suplement</option>
              <option value="Beverages">Beverages</option>
              <option value="Vitamin and minerals">vitamins and minerals</option>
            </select>
            {errors.category && <span>{errors.category.message}</span>}
          </div>
          <div>
            <label>Stock</label>
            <br />
            <input
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
            <label>Diet</label>
            <br />
            <select
              placeholder="Unspecified"
              {...register("diet", {
                required: {
                  value: true,
                  message: "Please select a diet",
                },
              })}
              defaultValue="Unspecified"
            >
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Keto">Keto</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Unspecified">Unspecified</option>
            </select>
            {errors.diet && <span>{errors.diet.message}</span>}
          </div>
          <div>
            <label>Flavor</label>
            <br />
            <select
              placeholder="Unspecified"
              {...register("flavor", {
                required: {
                  value: true,
                  message: "Please select a flavor",
                },
              })}
              defaultValue="Unspecified"
            >
              <option value="Vainilla">Vainilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Fruity">Fruity</option>
              <option value="Without Flavor">Without flavor</option>
              <option value="Unspecified">Unspecified</option>
            </select>
            {errors.flavor && <span>{errors.flavor.message}</span>}
          </div>
          <div>
            <label>Weight Value</label>
            <br />
            <input
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
            <label>Type</label>
            <br />
            <select
              {...register("type", {
                required: {
                  value: true,
                  message: "Please select a type",
                },
              })}
              defaultValue="gr"
            >
              <option value="g">gr</option>
              <option value="ml">ml</option>
              <option value="mg">mg</option>
              <option value="kg">kg</option>
            </select>
            {errors.type && <span>{errors.type.message}</span>}
          </div>
          {params.id ? (
            <button type="submit">Edit Product</button>
          ) : (
            <button type="submit">Add Product</button>
          )}
        </div>
      </form>
    </div>
  );
}  