import { atom } from 'jotai'

// Aplicação no Tema da página
export const isDarkModeAt = atom(false)

// Abrir modal de criação de projeto
export const openCreatioModal = atom(false)

// Editar modal de criação
export const openEditioModal = atom(false)

// Lista de projetos
export const projectsList = atom<Project[]>([])

// Project
export const projectAt = atom<Project>({
  id: 0,
  title: "",
  username: "",
  city: "",
  zip_code: "",
  cost: 0,
  done: false,
  deadline: ""
})

// Show the projects
export const showAt = atom("allprojects")

// Controlando Snacks
export const openSnackSuccessEdit = atom(false)
export const openSnackSuccessCreate = atom(false)

export interface Project {
  id: number
  title: string
  username: string
  city: string
  zip_code: string
  cost: number
  done: boolean
  deadline: string
}