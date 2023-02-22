import React ,{useState,useEffect} from  'react';
import {useNavigate}  from 'react-router-dom';
import axios from 'axios'
export default function AdminDashboardNewsTable() {
    const [latestNews,setLatestNews]  = useState([])
    const [latestCat,setLatestCat]  = useState([])
    const navigate = useNavigate()

    const navigateToAllnews =()=>{
        navigate("https://g-news-qh78.onrender.com/admin/allNews")
    }

    const navigateToCategory =()=>{
        navigate("https://g-news-qh78.onrender.com/admin/newsCategory")
    }
useEffect(()=>{
    getLatestNews();
    getLatestCat();
},[])

    const getLatestNews = ()=>{
        axios.get("https://g-news-qh78.onrender.com/admin/getAllNewsFromAdminPanel")
        .then((res)=>{
            const allLatestNews = res.data;
            const reverseNews = allLatestNews.reverse()
            setLatestNews(reverseNews)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getLatestCat = ()=>{
        axios.get("https://g-news-qh78.onrender.com/admin/getAllTheNewsCategories")
        .then((res)=>{
            const getCat = res.data.getAllNewsCat
            const revesrseCat = getCat.reverse();
            setLatestCat(revesrseCat)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  

  return (
    <>
      
<section className="py-1 bg-blueGray-50 flex">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Latest News</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button type="button" onClick={navigateToAllnews} className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >See all</button>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         Title
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         Likes
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Dislikes
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         Author
                        </th>
          </tr>
        </thead>

        <tbody>
            {latestNews ? latestNews.slice(0,5).map((news)=>{
                return(

                
          <tr key={news._id}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
             {news.Title.slice(0,30)}...
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
         {news.Likes}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {news.dislikes || 0}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
             {news.author_name}
            </td>
          </tr>
                )

            }):<p>no data to show</p>}
          
        </tbody>

      </table>
    </div>
  </div>
</div>
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Latest Categories</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button type="button" onClick={navigateToCategory} className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >See all</button>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Title
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         Status
                        </th>
           
         
          </tr>
        </thead>

        <tbody>
            {latestCat ? latestCat.slice(0,5).map((cat)=>{
                return(

          <tr key={cat._id}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
           {cat.category_name}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
             {cat.Status}
            </td>
           
            
          </tr>
                )
            }):<p>no data</p>}
         
        </tbody>

      </table>
    </div>
  </div>
</div>

</section>  

    </>
  )
}

