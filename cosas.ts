interface Cosas {
  id: number;
  name: string;
  description: string;
}

const cosas = {
  collection: [
    { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
    { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
    { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
    { id: 4, name: "Objeto 4", description: "Descripción del objeto 4" },
  ],
  getAll: function (): Cosas[] {
    // Tu código
    return cosas.collection;
  },
  // Método para obtener un objeto por id
  getById: function (id: number): Cosas | undefined {
    // Tu código
    return cosas.collection.find((c) => c.id === id);
  },
};

export default cosas;
