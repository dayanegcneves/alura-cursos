const ENDPOINT = 'http://localhost:3000/eventos';

const api = {
    async buscarEventos() {
        try {
            const response = await fetch(ENDPOINT)
            return response.json()
        } catch (error) {
            alert('Erro ao buscar evento')
            throw error
        }
    },

    async cadastrarEvento(evento) {
        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...evento,
                    data: evento.data.toISOString()
                })
            })

            return await response.json()
        } catch (error) {
            alert('Erro ao cadastrar evento')
            throw error
        }
    }
}

export default api