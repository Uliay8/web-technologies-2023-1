import api from "./api.js";

export default class Todos {

    static async getAll() {
        try
        {
            const response = await api('/todo/');
            return response.data;
        }
        catch (e)
        {
            console.log(e);
        }
    }
    // get get /todo/1 - 1 это id я не поняла куда его
    static async getById(id)
    {
        try
        {
            const response = await api('/todo/' + id, { method: 'GET' });
            return response.data;
        }
        catch (e)
        {
            console.log(e);
        }
    }

    static async create(description)
    {
        try
        {
            console.log("create")
            const response = await fetch("http://localhost:8000/api/todo",
                {
                    method: 'POST',
                    headers: {
                        'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwib…jM4fQ.kpnm3HmG5Xj9XMY-9nDbZnrivQsVBxaVgsOzZXCm-Pk\', refreshToken: \'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwib…DM4fQ.IJ07PP778mLhrAyrSdug2QIh-G4KdIqyneYEaC-rzLI\', user: {…}}'
                    },
                    body: JSON.stringify({ description: description
                    })
                })
                // api('/todo', { method: 'POST', body: JSON.stringify({ description: description }) });
            return response;
        }
        catch (e)
        {
            console.log(e);
            return null;
        }
    }

    static async updateStatusById(id, completed)
    {
        try
        {
            const response = await api('/todo/' + id, { method: 'PUT', body: JSON.stringify({ completed: completed }) });
            return response;
        }
        catch (e)
        {
            console.log(e);
            return null;
        }

    }

    static async deleteById(id)
    {
        try
        {
            return await api('/todo/' + id, { method: 'DELETE' });
        }
        catch (e) {
            console.log(e);
        }
    }
}