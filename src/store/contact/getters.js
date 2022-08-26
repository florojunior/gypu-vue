export const getters = {
  getList: (state)=> {
    return state.list
  },
  getListFiltered: (state) => {
    return state.list.filter((contact) => {
      return contact.name.includes(state.filterInput) || contact.cellphone.includes(state.filterInput) || contact.email.includes(state.filterInput) 
    })
  },
};
