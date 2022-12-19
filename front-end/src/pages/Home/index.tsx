/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import HomeModel from '../../components/models/HomeModel'
import { useGetProjects } from '../../hooks/use-get-projects';
import { useGetProjectsByUser } from '../../hooks/use-get-projects -by-user';
import { projectsList, showAt } from '../../store';

export default function Home() {
  const [cookies] = useCookies();
  const [, setProjects] = useAtom(projectsList)
  const [show] = useAtom(showAt)
  const navigate = useNavigate();
  const {data, isLoading} = useGetProjects(show, cookies.token)
  const {data: dataUser, isLoading: isLoadingUser} = useGetProjectsByUser(cookies.username, show, cookies.token)

  useEffect(() => {
    if(!cookies.token) {
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    if(data && data?.projects?.length > 0 && !isLoading && show === 'allprojects') {
      data.projects.sort((a, b) => a.id - b.id)
      setProjects(data.projects)
    }
  }, [data, isLoading])

  useEffect(() => {
    if(dataUser && dataUser?.projectsByUser?.length > 0 && !isLoadingUser && show === 'myprojects') {
      dataUser.projectsByUser.sort((a, b) => a.id - b.id)
      setProjects([ ...dataUser.projectsByUser ])
    }
  }, [dataUser, isLoadingUser])

  return (
    <HomeModel />
  )
}
