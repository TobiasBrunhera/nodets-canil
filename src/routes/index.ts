import { Router } from "express";
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

export const mainRoutes = Router()

mainRoutes.get('/', pageController.home)
mainRoutes.get('/dogs', pageController.dogs)
mainRoutes.get('/cats', pageController.cats)
mainRoutes.get('/fishes', pageController.fishes)

mainRoutes.get('/search', searchController.search)

