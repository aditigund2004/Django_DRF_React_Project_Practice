import React, { useState } from 'react'

const FoodForm = () => {

    const [form, setForm] = useState({
        name: '',
        std: '',
        games: []

    })


    const games = [

    ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        setForm({
            name: '',
            std: '',
            games: []

        })
    }

    const handleCheckbox = (e) => {

        const { value, checked } = e.target;
        if (checked) {
            setForm({ ...form, games: [...form.games, value] })
        } else {
            setForm({ ...form, games: [...form.games.filter((g) => g != value)] })
        }
    }
    return (
        <div>
            <h2>
                Add student
            </h2>

            <form onSubmit={handleSubmit}>
                name : <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br /><br />
                std : <input type="text" name='std' value={form.std} onChange={handleChange} required /> <br /><br />

                Games : <br /><br />

                <input type="checkbox" name='games' value='Cricket' onChange={handleCheckbox} checked={form.games.includes("Cricket")} /> Cricket <br /><br />
                <input type="checkbox" name='games' value='Football' onChange={handleCheckbox} checked={form.games.includes("Football")} /> Football <br /><br />
                <input type="checkbox" name='games' value='Tennis' onChange={handleCheckbox} checked={form.games.includes("Tennis")} /> Tennis <br /><br />

                <button>
                    Add Data
                </button>

            </form>
        </div>
    )
}

export default FoodForm
