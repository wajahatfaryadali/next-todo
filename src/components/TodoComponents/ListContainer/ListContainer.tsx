import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { Box, Button, List, Theme, Typography } from '@mui/material'
import { completedTodos, incompleteTodos, todosList, totalTodos } from '@/store/slices/selectors/todo.selector'
import classes from '@/app/page.module.css'
import { ListContainerProps } from '@/utils/constants/interfaces'

import useMediaQuery from "@mui/material/useMediaQuery";


const MListItem = dynamic(() => import("@/components/muiComponents/MListItem.tsx/MListItem"), { ssr: false })

const ListContainer: React.FC<ListContainerProps> = (props) => {
    const { handleTodoClick } = props;

    const todos = useSelector(todosList)
    const totalTodosCount = useSelector(totalTodos)
    const totalCompleted = useSelector(completedTodos)
    const totalIncomplete = useSelector(incompleteTodos)

    const isFullWidth = useMediaQuery((theme: Theme) => theme.breakpoints.only("xs"));


    const [listName, setListName] = useState<string>('');

    const updateList = (list: string) => {
        setListName(list);
    }

    return (
        <>
            <Box
                className={classes.titleContainer}
                mb={'1rem'}
                flexDirection={{ xs: 'column', sm: 'row' }}
            >
                {totalTodosCount ?
                    <Button
                        variant='contained'
                        classes={{ root: classes.AllButton }}
                        sx={{ minWidth: '150px' }}
                        fullWidth={isFullWidth}
                        onClick={() => updateList('all')}
                    >
                        All {totalTodosCount}
                    </Button>
                    :
                    <Typography variant='h5'>
                        No todoz available. Add some!
                    </Typography>
                }
                {totalCompleted.length ?
                    <Button
                        variant='contained'
                        classes={{ root: classes.completedButton }}
                        sx={{ minWidth: '150px' }}
                        fullWidth={isFullWidth}
                        onClick={() => updateList('completed')}
                    >
                        Completed {totalCompleted.length}
                    </Button> : <></>
                }
                {totalIncomplete.length ?
                    <Button
                        variant='contained'
                        classes={{ root: classes.inCompletedButton }}
                        sx={{ minWidth: '150px' }}
                        fullWidth={isFullWidth}
                        onClick={() => updateList('incomplete')}
                    >
                        In Complete {totalIncomplete.length}
                    </Button> : <></>
                }
            </Box>
            {totalTodosCount ?
                <List classes={{ root: classes.listItemContainer }} sx={{ p: { xs: '0.25rem', sm: '1rem 2rem 1rem' } }} >
                    {listName === 'completed' ?
                        totalCompleted.map((todo) =>
                            <MListItem key={todo.id} todo={todo} handleTodoClick={handleTodoClick} isCompletedList={true} />
                        )
                        : listName === 'incomplete' ?
                            totalIncomplete.map((todo) =>
                                <MListItem key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
                            )
                            : todos.map((todo) =>
                                <MListItem key={todo.id} todo={todo} handleTodoClick={handleTodoClick} />
                            )
                    }
                </List>
                :
                ''
            }
        </>
    )
}

export default ListContainer
